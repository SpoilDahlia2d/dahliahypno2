import os
import json

# Cartella dove sono le immagini
image_folder = "static"

# Lista di tutti i file .png con percorso relativo
images = [os.path.join(image_folder, f).replace("\\", "/") 
          for f in os.listdir(image_folder) if f.lower().endswith(".png")]

# Salva in images.json
with open(os.path.join(image_folder, "images.json"), "w") as f:
    json.dump(images, f, indent=2)

print(f"Creato {os.path.join(image_folder, 'images.json')} con {len(images)} immagini.")
