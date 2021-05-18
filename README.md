# jasonlmfong

### Configuration

Update the variables of `_config.yml` as needed. Some of them are typical options:

- `url`
- `avatar`
- `timezone`
- `lang`

### Running Local Server

You may want to preview the site contents before publishing, so just run it by:

```console
$ bundle exec jekyll s
```

Or run the site on Docker with the following command:

```terminal
$ docker run -it --rm \
    --volume="$PWD:/srv/jekyll" \
    -p 4000:4000 jekyll/jekyll \
    jekyll serve
```

Open a browser and visit to _<http://localhost:4000>_.

#### Deploy on GitHub Pages

For security reasons, GitHub Pages build runs on `safe` mode, which restricts us from using plugins to generate additional page files. Therefore, we can use **GitHub Actions** to build the site, store the built site files on a new branch, and use that branch as the source of the GH Pages service.

Quickly check the files needed for GitHub Actions build:

- Ensure your Jekyll site has the file `.github/workflows/pages-deploy.yml`. Otherwise, create a new one and fill in the contents of the [workflow file][workflow], and the value of the `on.push.branches` should be the same as your repo's default branch name.
- Ensure your Jekyll site has file `tools/test.sh` and `tools/deploy.sh`. Otherwise, copy them from this repo to your Jekyll site.

And then rename your repository to `<GH-USERNAME>.github.io` on GitHub.

Now publish your Jekyll site by:

1. Push any commit to remote to trigger the GitHub Actions workflow. Once the build is complete and successful, a new remote branch named `gh-pages` will appear to store the built site files.

2. Browse to your repo's landing page on GitHub and select the branch `gh-pages` as the [publishing source](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) through _Settings_ → _Options_ → _GitHub Pages_:

    ![gh-pages-sources](https://cdn.jsdelivr.net/gh/cotes2020/chirpy-images/posts/20190809/gh-pages-sources.png)

3. Visit your website at the address indicated by GitHub.

## License

This work is published under [MIT](https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/LICENSE) License.

[starter]: https://github.com/cotes2020/chirpy-starter
[use-starter]: https://github.com/cotes2020/chirpy-starter/generate
[workflow]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/.github/workflows/pages-deploy.yml.hook

<!-- ReadMe links -->

[jb]: https://www.jetbrains.com/?from=jekyll-theme-chirpy
[cn-donation]: https://cotes.gitee.io/alipay-wechat-donation/
