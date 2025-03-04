
# NextJS API Fetch

A simple API fetch using the REST countries API, displaying simple country information. 

# Authors

- [@Oakuopus](https://github.com/oakuopus)

# Deployment
    1. Download Zip file from github
    2. Extract zip file
    3. Open terminal and run:
```bash
  npm i
  npm run dev
```
    4. Open URL: http://localhost:3000/ 
    5. Login or create account to get started

# Usage

```
useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/name/china") 
            .then((response) => response.json()) 
            .then((data) => {
                setCountryData(data);
                console.log("fetchedData:", data)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

```
- Enter country name of any country you wish to see data on (https://restcountries.com/v3.1/name/china)
- Returns official name, flag, capital city, languages, and currency used.
## Contributing

Contributions are always welcome!

Email `okuopu637@gmail.com` to learn more

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Version
 - 1.0 
3/3/2025

