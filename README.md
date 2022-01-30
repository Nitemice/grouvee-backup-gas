# Grouvee Backup Script

*Export user data from Grouvee, using Google Apps Script.*

This script can be used to automatically bulk-export a user's collection, as
CSV file, from Grouvee. They are stored in a specified Google Drive directory,
where they can be easily downloaded or shared.

## Usage

This script is designed to be run on-demand via the GAS interface, or
periodically via GAS triggers. For more info on setting up GAS triggers, see
[this Google Apps Script guide](https://developers.google.com/apps-script/guides/triggers).

To execute the script, simply run the `main()` function.

**NOTE**: This script works by simulating an export request via Grouvee's
          Settings page. Due to this, the script will trigger an email from
          Grouvee each time it is run.

## Setup

There are two basic steps necessary to run this script.

1. [Customize your config file](#1.-Customize-your-config-file)
2. [Load the script into a new Google Apps Script project](#2.-Load-the-script-into-a-new-Google-Apps-Script-project)

### 1. Customize your config file

`config.js` should contain a single JavaScript object, used to specify all
necessary configuration information. Here's where you specify the user, the
desired format(s), as well as the Google Drive directory to save exported
files to.

An example version is provided, named `example.config.js`, which can be
renamed or copied to `config.js` before loading into the GAS project.

The basic structure can be seen below.

```js
const config = {
    "username":  "<Grouvee username>",
    "userId": "<Grouvee user ID>",
    "sessionId":  "<Grouvee session ID>",
    "backupDir": "<Google Drive directory ID>"
};
```

- `username`: Username of the Grouvee user whose user data is being exported.
    This value is case-sensitive.
- `userId`: User ID of the Grouvee user whose user data is being exported.
    The only known way to retrieve this value is by manually requesting a
    collection export, via the Setting page, and the user ID will be part of
    the URL sent to the user via email.
- `sessionId`: Session ID from cookies of the Grouvee user whose user data is
    being exported. This can be found by viewing the request headers of a page
    load, while logged in as the desired user, via the Developer Tools in most
    browsers.
- `backupDir`: The ID of the Google Drive directory, where exported data
    should be stored. This can be found by navigating to the folder, and
    grabbing the ID from the tail of the URL.

### 2. Load the script into a new Google Apps Script project

You can manually load the script into a
[new GAS project](https://www.google.com/script/start/),
by simply copying and pasting it into the editor.

Or you can use a
[tool like clasp](https://developers.google.com/apps-script/guides/clasp)
to upload it directly. For more information on using clasp, here is a
[guide I found useful](https://github.com/gscharf94/Clasp-Basics-for-Reddit).
