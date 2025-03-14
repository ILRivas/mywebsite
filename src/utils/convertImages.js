const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Define Input & Output Base Directories
const inputBaseDir = "./src/assets/Photography"; // Change if needed
const outputBaseDir = "./src/assets/Photography_WebP"; // Stores converted WebP images

// Ensure the output base directory exists
if (!fs.existsSync(outputBaseDir)) {
    fs.mkdirSync(outputBaseDir, { recursive: true });
}

// Function to process images in subdirectories
const processImagesInDirectory = (inputDir, outputDir) => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.readdirSync(inputDir).forEach(file => {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, `${path.parse(file).name}.webp`);
        const ext = path.extname(file).toLowerCase(); // ✅ Convert to lowercase to handle uppercase extensions

        if (fs.statSync(inputFilePath).isDirectory()) {
            // Recursively process subdirectories
            processImagesInDirectory(inputFilePath, path.join(outputDir, file));
        } else if ([".jpg", ".jpeg", ".png"].includes(ext)) { // ✅ Handles both lowercase & uppercase extensions
            // Convert image to WebP
            sharp(inputFilePath)
                .resize({ width: 1600 }) // Adjust width as needed
                .toFormat("webp", { quality: 85 }) // Adjust quality as needed
                .toFile(outputFilePath)
                .then(() => console.log(`✅ Converted: ${file} → ${outputFilePath}`))
                .catch(err => console.error(`❌ Error converting ${file}:`, err));
        }
    });
};

// Process all images inside the main Photography directory
processImagesInDirectory(inputBaseDir, outputBaseDir);

console.log("🚀 WebP image conversion complete with folder structure maintained!");