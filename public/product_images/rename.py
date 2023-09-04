
import os

# Get the current directory (assumes you are inside the main folder)
main_folder = os.getcwd()

# Iterate through the subfolders
for folder_name in os.listdir(main_folder):
    folder_path = os.path.join(main_folder, folder_name)

    # Check if it's a directory
    if os.path.isdir(folder_path):
        image_count = 1

        # Iterate through image files in the subfolder
        for image_file in os.listdir(folder_path):
            if image_file.lower().endswith(('.jpg', '.jpeg', '.png')):
                # Construct the new file name (e.g., image1.jpg, image2.jpg)
                new_name = f'image{image_count}.jpg'

                # Rename the image file
                old_path = os.path.join(folder_path, image_file)
                new_path = os.path.join(folder_path, new_name)

                # Rename the file
                os.rename(old_path, new_path)

                print(f'Renamed: {image_file} -> {new_name}')
                image_count += 1
