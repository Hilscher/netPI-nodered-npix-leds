## Node-RED + npix-leds node

Made for [netPI](https://www.netiot.com/netpi/), the Open Edge Connectivity Ecosystem

### Debian with Node-RED and npix-leds node

The image provided hereunder deploys a container with installed Debian, Node-RED and npix-leds node to control LEDs of all LED supporting NPIX extension modules.

Base of this image builds the latest version of [debian:jessie](https://hub.docker.com/r/resin/armv7hf-debian/tags/) with installed Internet of Things flow-based programming web-tool [Node-RED](https://nodered.org/) and one extra node *npix leds* providing access to the LEDs of LED supporting NPIX modules over the GPIOs 22,23,25 and 26.

#### Container prerequisites

##### Port mapping

To allow the access to the Node-RED programming over a web browser the container TCP port `1880` needs to be exposed to the host.

##### Privileged mode

The node *npix leds* controls the NPIX LED signals across the GPIOs 22,23,25 and 26. Only an enabled privileged mode option lifts the enforced container limitations to allow usage of GPIOs in a container.

#### Getting started

STEP 1. Open netPI's landing page under `https://<netpi's ip address>`.

STEP 2. Click the Docker tile to open the [Portainer.io](http://portainer.io/) Docker management user interface.

STEP 3. Enter the following parameters under **Containers > Add Container**

* **Image**: `hilschernetpi/netpi-nodered-npix-leds`

* **Port mapping**: `Host "1880" (any unused one) -> Container "1880"` 

* **Restart policy"** : `always`

* **Runtime > Privileged mode** : `On`

STEP 4. Press the button **Actions > Start container**

Pulling the image from Docker Hub may take up to 5 minutes.

#### Accessing

After starting the container open Node-RED in your browser with `http://<netpi's ip address>:<mapped host port>` e.g. `http://192.168.0.1:1880`. One extra node *rfid leds* in the nodes *netiot* library provides you access to the LEDs of all LED supporting NPIX extension modules. The node's info tab in Node-RED explains how to use it.

#### Tags

* **hilscher/netPI-nodered-npix-leds:latest** - non-versioned latest development output of the master branch. Can run on any netPI system software version.

#### GitHub sources
The image is built from the GitHub project [netPI-nodered-npix-leds](https://github.com/Hilscher/netPI-nodered-npix-leds). It complies with the [Dockerfile](https://docs.docker.com/engine/reference/builder/) method to build a Docker image [automated](https://docs.docker.com/docker-hub/builds/).

To build the container for an ARM CPU on [Docker Hub](https://hub.docker.com/)(x86 based) the Dockerfile uses the method described here [resin.io](https://resin.io/blog/building-arm-containers-on-any-x86-machine-even-dockerhub/).

[![N|Solid](http://www.hilscher.com/fileadmin/templates/doctima_2013/resources/Images/logo_hilscher.png)](http://www.hilscher.com)  Hilscher Gesellschaft fuer Systemautomation mbH  www.hilscher.com
