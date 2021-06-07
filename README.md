# RISer

RISer stands for reverse image searcher. It is a web browser extension that adds a menu item to the right click menu when the user clicks on an image, and on click, lets the user search for that image on Google images. Though this functionality was on earlier versions of chromium, it has now been removed and thus this extension aims to provide the same functionality. Keep in mind that, as of now, this extension only works on chromium-based web browsers (Google Chrome, Brave, Vivaldi, etc.) because it uses Google Chrome's API. 

## Usage

Given any image on any site, simply right click on an image and click "reverse image search." This will redirect you to Google images and display the content based on the searched image: 

![right click menu](/repo-img/rightclickmenu.png)

However, if you have a URL on your clipboard already, you can click on the extension icon in the top right corner and paste it in, which will do the same thing: 

![popup menu](/repo-img/popup.png)

## Installation 

First, download the zip file for this repository or clone it with git using `git clone https://github.com/naowalrahman/riser.git`. Then, go to your extensions page on chrome and enable developer mode: 

![developer mode on](/repo-img/developermode.png)

Then, click on "load unpacked": 

![load unpacked extension](/repo-img/loadunpacked.png)

And finally, turn the extension on: 

![turn on extension](/repo-img/turnextensionon.png)

And... that's all! You're set to use the extension. 

## Contributions

If you want to add a new feature or report an issue for this program, feel free to do so! Report issues in the issues tab, and to add new features, just make a pull request. 
