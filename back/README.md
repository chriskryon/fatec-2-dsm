### Step 1: Install Docker and Docker Compose

Make sure you have Docker and Docker Compose installed on your machine. You can download and install them from the official Docker website.

### Step 2: Create a `docker-compose.yml` File

In your project directory, create a file named `docker-compose.yml`. This file will define the PostgreSQL service using the Bitnami PostgreSQL image.

Here’s an example of what your `docker-compose.yml` file might look like:

```yaml
version: '3.8'

services:
  postgresql:
    image: bitnami/postgresql:latest
    environment:
      - POSTGRESQL_DATABASE=bdaula
      - POSTGRESQL_USERNAME=postgres
      - POSTGRESQL_PASSWORD=postgres
    ports:
      - '5432:5432'
    volumes:
      - postgresql_data:/bitnami/postgresql

volumes:
  postgresql_data:
    driver: local
```

### Explanation of the `docker-compose.yml` File

- **version**: Specifies the version of the Docker Compose file format.
- **services**: Defines the services that will be run in the Docker container.
  - **postgresql**: The name of the service.
    - **image**: Specifies the Bitnami PostgreSQL image to use.
    - **environment**: Sets environment variables for the PostgreSQL container:
      - `POSTGRESQL_DATABASE`: The name of the database to create (`bdaula`).
      - `POSTGRESQL_USERNAME`: The username for the PostgreSQL database (`postgres`).
      - `POSTGRESQL_PASSWORD`: The password for the PostgreSQL user (`postgres`).
    - **ports**: Maps port 5432 of the container to port 5432 on the host machine.
    - **volumes**: Persists the PostgreSQL data using a Docker volume.
- **volumes**: Defines a named volume (`postgresql_data`) to store PostgreSQL data.

### Step 3: Start the PostgreSQL Service

Open a terminal, navigate to your project directory where the `docker-compose.yml` file is located, and run the following command:

```bash
docker-compose up -d
```

This command will start the PostgreSQL service in detached mode. The `-d` flag runs the containers in the background.

### Step 4: Verify the PostgreSQL Service

You can check if the PostgreSQL container is running by executing:

```bash
docker-compose ps
```

You should see the PostgreSQL service listed and its status should be "Up".

### Step 5: Connect to the PostgreSQL Database

You can connect to the PostgreSQL database using a PostgreSQL client (like `psql`, DBeaver, or pgAdmin) with the following connection details:

- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `bdaula`
- **Username**: `postgres`
- **Password**: `postgres`

### Step 6: Stopping the Service

When you are done working with the database, you can stop the service by running:

```bash
docker-compose down
```

This command will stop and remove the containers defined in your `docker-compose.yml` file.

### Conclusion

You have successfully added Docker to your project for a PostgreSQL database using Bitnami's PostgreSQL image. You can now manage your database within a Docker container, making it easier to develop and deploy your application.