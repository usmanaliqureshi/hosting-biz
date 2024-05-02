/**
 * Automatically Deploy the Project
 */
const FtpDeploy = require("ftp-deploy");
const dotenv = require('dotenv');
const path = require('path');

// DotEnv
dotenv.config({ path: ".env" });

async function deployproject() {
    try {
        // Path to /build
        const outDir = path.join(process.cwd(), "/build");

        console.log("○ Project Deployment Started at https://clients.usmanaliqureshi.com");

        await new FtpDeploy().deploy({

            // FTP Credentials
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS, // Your credentials
            host: process.env.FTP_HOST, // Your credentials
            port: process.env.FTP_PORT, // Your credentials

            localRoot: outDir, // Location of build files in project
            remoteRoot: "/", // Upload location on remote, replace with subfolder on FTP-server if required

            include: ["*", "**/*"], // Upload all files from build folder
            exclude: [], // Exclude no files

            deleteRemote: true, // Set to true if you want to delete ALL FILES in the remote root before uploading
            forcePasv: true // Use passive mode
        })

        console.log("")
        console.log("\u2713  Succesfully deployed the Project");
        console.log("")
        return 0;

    } catch (e) {

        console.error("An error occured during deployment:", e);
        return 1;

    }
}

deployproject().then((code) => process.exit(code));