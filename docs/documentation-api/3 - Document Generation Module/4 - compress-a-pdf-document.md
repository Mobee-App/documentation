# PDF Compression Feature Documentation

## Overview

This document provides information about the new PDF compression feature, which allows users to compress PDF files to a smaller size with controlled quality. The compression process utilizes Ghostscript (gs) and offers users the flexibility to adjust Quality Control Parameters according to their preferences.

## Usage

### Quality Control Parameters

Quality Control Parameters are variables that users can adjust to control the size and quality of the compressed PDF file. These parameters include:

- `ColorImageResolution`: Specifies the resolution (in dots per inch, or dpi) for color images in the PDF file. Higher values result in higher image quality but larger file sizes. Lower values reduce image quality but lead to smaller file sizes.

- `GrayImageResolution`: Similar to `ColorImageResolution`, this parameter specifies the resolution for grayscale images in the PDF file.

- `MonoImageResolution`: Specifies the resolution for monochrome (black and white) images in the PDF file.

If these parameters are not provided, default values will be set to 120 for each variable.

### Input

Users have the option to provide either a PDF file or the URL of a PDF file. If a URL is provided, the system will download the file and proceed with the compression process.