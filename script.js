
let totalFiles = 0;
let filesNeeded = 0;

function SetFilesTotal(total) {
    totalFiles = total;
    updateProgress();
}

function SetFilesNeeded(needed) {
    filesNeeded = needed;
    updateProgress();
}

function DownloadingFile(fileName) {
    document.getElementById("status").textContent = "Скачивание файлов";
    document.getElementById("file").textContent = fileName;
}

function SetStatusChanged(status) {
    document.getElementById("status").textContent = status;
}

function updateProgress() {
    if (!totalFiles) return;

    let loaded = totalFiles - filesNeeded;
    let percent = Math.round((loaded / totalFiles) * 100);

    document.getElementById("progress").style.width = percent + "%";
    document.getElementById("percent").textContent = percent + "%";
    document.getElementById("files").textContent =
        "Осталось файлов: " + filesNeeded;
}


