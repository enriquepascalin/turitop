# Turitop Demo Site #

Instructions to setup your environment.

***

### Prerequisites ###

1. Linux Box (suggested Debian or Ubuntu) OR WSL2 (Ubuntu) [WSL2 Instructions](https://learn.microsoft.com/es-es/windows/wsl/install)
2. Docker Client and Docker Compose [Docker Cli](https://github.com/docker/cli) / [Docker Compose](https://docs.docker.com/compose/)
3. If using Windows, we suggest [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)
4. Git and strongly recommended a [Git client](https://desktop.github.com/download/) like Github Desktop

***
 
### Instructions to mount environment: ###

**1** - Within your Linux box or WSL2 environment:
~~~
git clone https://github.com/enriquepascalin/turitop.git
~~~

**2** - Access your newly created directory
~~~
cd turitop
~~~

**3** - Build your images and mount your containers
~~~
docker compose up -d
~~~

**4** - Make sure your containers are running:
~~~
docker compose ps
~~~
You will see something like the following output:
~~~
PS Microsoft.PowerShell.Core\FileSystem::\\wsl.localhost\Ubuntu-22.04\home\erparom\turitop> docker compose ps
NAME         IMAGE              COMMAND                  SERVICE      CREATED             STATUS             PORTS
mysql        mysql:latest       "docker-entrypoint.s…"   db           About an hour ago   Up About an hour   3306/tcp, 33060/tcp
phpmyadmin   phpmyadmin         "/docker-entrypoint.…"   phpmyadmin   About an hour ago   Up About an hour   0.0.0.0:8080->80/tcp
wordpress    wordpress:latest   "docker-entrypoint.s…"   wordpress    About an hour ago   Up About an hour   0.0.0.0:8082->80/tcp
~~~
As you can see, there are 3 containers:

1. mysql (holds the MySQL database)
2. phpmyadmin (gives you access to the database via PhpMyAdmin Client)
3. wordpress (contains the application and pluggins) 

**5** - You an access the containers with your browser pointing at:

* Phpmyadmin: http://localhost:8080
* Wordpress Admin: http://localhost:8082/wp-admin/
* Wordpress Site: http://localhost:8082/

You can find default DB credentials for the database inside the compose.yml file.

For the Wordpress Admin:
* user: turitop
* pwd: F6,628DWyV@&a75

**6** - The local folders contain the following:
* db_data: holds MySQL data. **Strongly suggested NOT to change.**
* wp_data: Your wordpress installation
* plugins: Link to wordpress plugins within wp_data **(Strongly suggested to work only here)**


