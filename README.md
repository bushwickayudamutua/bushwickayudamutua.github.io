# Bushwick Ayuda Mutua

This is the source code for the website of Bushwick Ayuda Mutua, located at https://bushwickayudamutua.com/.

## How to add / edit a page on the website

This website is built using a framework called [`jekyll`](https://jekyllrb.com/) which allows you to write human-readable [markdown](https://www.markdownguide.org/cheat-sheet/) documents which are rendered as HTML. A markdown document is just a text file with some special syntax for declaring links, lists, headers, bold text, etc. For instance, our [privacy](privacy.md), [safety](safety.md), and [calendar](calendar.md) pages are all composed in markdown. You'll notice you can also write plain html in markdown, which is how we embed some iFrames from other services. These files also include metadata at the top of the file (separated by `---`) include the `title` of the page, the `layout` (will usually be `info`), and the `permalink` which controls the URL of the resulting page.

You can easily [add](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) and [edit](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) markdown files in Github's interface. Once
you finish making your changes, add a commit messages describing them and submit it. The website should update to reflect your changes within 5-10 minutes!
## How to upload resources to the website

To upload documents to the `resources` directory of the website, navigate to it in Github's interface [here](/resources) and click the "Add file" button which allows you to drag-and-drop files from your computer. 

Make sure to remove all spaces and other punctuation from the file names before uploading them as they can cause the resulting URLs to be difficult to share. A good standard to follow is: 
- only use lowercase letter and numbers
- user the `-` symbol for spacing
- include the document format at the end 
- for instance: `mutual-aid-guide.pdf` 

When the files finish uploading, you can add a commit message to describe the changes you made.

When uploading documents, always try to use lower compression settings and sizes so they'll load fast on phones and poor internet. Try to follow these file-format standards:
- Images: use `jpg` or `png` 
- Video: use `mp4`
- Audio: use `mp3`
- Documents: use `pdf`
- Folders of multiple files: use `zip` compression

Once the files have uploaded, they will become publicly available on the website in 5-10 minutes. You can then update the [resources page](/resources/index.md) with links and descriptions of the new documents.

## How to run the site locally

You'll need [node](https://nodejs.org/en/download/) for npm, and ruby and [jekyll](https://jekyllrb.com/docs/installation/macos/). We're currently running these versions:
- `node`: `v14.18.1`
- `npm`: `6.14.15`
- `ruby`: `3.0.2p107`
- `jekyll`: 

You should be able to install these on Mac OS X by running the following series of commands:

```bash
brew install ruby node@14
gem install bundler
```

Now clone the repo, go to the folder in your terminal and run `bundle exec make serve`.

When it's running, go to [https://localhost:4000](https://localhost:4000) on your browser.

## Want to Volunteer?

If you'd like to get involved with BAM, [please fill out our volunteer form and we'll be in touch](https://bushwickayudamutua.com/volunteer/)!
