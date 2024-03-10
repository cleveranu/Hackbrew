const { spawn } = require('child_process');

// Function to run the Python script and log its output
function runPythonScript() {
  const pythonProcess = spawn('python', ['llm.py']); // Update the path to your script

  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

runPythonScript();
