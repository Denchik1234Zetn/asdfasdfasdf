
const image = Math.floor(Math.random() * 9) + 1;

document.querySelector(".background").style.backgroundImage =
    `url("images/${image}.png")`;

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

    const loaded = totalFiles - filesNeeded;
    const percent = Math.max(0, Math.min(100, Math.round((loaded / totalFiles) * 100)));

    document.getElementById("progress").style.width = percent + "%";
    document.getElementById("percent").textContent = percent + "%";
    document.getElementById("files").textContent =
        "Осталось файлов: " + filesNeeded;
}
