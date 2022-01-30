const requestUrl = "https://www.grouvee.com/export/";
const csvUrl = "https://img-grouvee-com.b-cdn.net/csv/";
const csvName = "_grouvee_export.csv";

function getData(url)
{
    var options = {
        "muteHttpExceptions": true,
        "headers": {
            "Cookie": "sessionid=" + config.sessionId
        }
    };
    var response = UrlFetchApp.fetch(url, options);
    return response.getContentText();
}

function makeRequest()
{
    getData(requestUrl);
}

function fetchBackup()
{
    var url = csvUrl + config.username + "_" + config.userId + csvName;
    var data = getData(url);

    // Save the file in the indicated Google Drive folder
    var file = common.updateOrCreateFile(config.backupDir, "grouvee.csv", data);
}

function main()
{
    makeRequest();
    // Wait a few minutes to give Grouvee time to compile the csv
    Utilities.sleep(150000);
    fetchBackup();
}