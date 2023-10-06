name: Deploy to GitHub pages
on:
  push:
    branches: [nuxt]
env:
  BUILD_FOLDER: .output/public # or .output/public/yourrepositoryname/
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Generate static Nuxt 3 files
        uses: actions/setup-node@v3
        with:
          node-version: "16"
          cache: 'yarn'

      - run: |
          yarn install
          yarn generate
      #      - name: Init new repo in $BUILD_FOLDER and commit generated files
      #        run: |
      #          grep -rnwl "<link rel=\"prefetch\"" $BUILD_FOLDER | xargs sed -i 's$<link rel="prefetch" href="[^"]*\.\(jpg\|png\|webm\|jpeg\|ttg\|svg\|gif\)">$$g'
      #          cd $BUILD_FOLDER
      #          touch .nojekyll
      #          git init
      #          git add -A
      #          git config --local user.email "action@github.com"
      #          git config --local user.name "GitHub Action"
      #          git commit -m 'deploy'
      #      - name: Deploy
      #        uses: JamesIves/github-pages-deploy-action@v4
      #        with:
      #          folder: ${{env.BUILD_FOLDER}}


      - name: copy
          env:
            SRC_FOLDER_PATH: 'frontend/.output'
            TARGET_BRANCH: 'build-site'
          run: |
            files=$(find $SRC_FOLDER_PATH -type f) # get the file list
            git config --global user.name 'GitHub Action'
            git config --global user.email 'action@github.com'
            git fetch                         # fetch branches
            git checkout $TARGET_BRANCH       # checkout to your branch
            git checkout ${GITHUB_REF##*/} -- $files # copy files from the source branch
            git add -A
            git diff-index --quiet HEAD ||  git commit -am "deploy files"  # commit to the repository (ignore if no modification)
            git push origin $TARGET_BRANCH # push to remote branch