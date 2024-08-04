import pandas as pd

games_dataset_path = 'data/raw/games.grivg.csv'
df = pd.read_csv(games_dataset_path)

columns_to_keep = [
    'Title', 
    'Release',
    'Developer', 
    'Country', 
    'Protagonist', 
    'Protagonist_Non_Male', 
    'Percentage_non_male'
]
df_cleaned = df[columns_to_keep]

print("Cleaned DataFrame:")
print(df_cleaned.head())

cleaned_dataset_path = 'data/cleaned/cleaned_games.csv'
df_cleaned.to_csv(cleaned_dataset_path, index=True)

print(f"Cleaned dataset saved to {cleaned_dataset_path}")
