# 2. Create an AWS instance
 
## 2.1 Create a virtual machine (instance)

### 2.1.0. Follow the instance creation steps

#### 2.1.0.1. Go to the Instance Launch page, choose EC-2 service

![ Go to the Instance Launch page, choose EC-2 service](/images/en/instance0.jpg)

#### 2.1.0.2. Launch a virtual server, known as Amazon EC-2 Instance
 
![Launch a virtual server, known as Amazon EC-2 Instance](/images/en/instance0_1.jpg)

#### 2.1.0.3. Choose Amazon machine Image (Operating System) - the Ubuntu Server 18.04 LTS

![Choose Amazon machine Image (Operating System)](/images/en/instance0_2.jpg)

### 2.1.1. Choose Instance type
The `t2.micro` instance type is set by default and is the right one to go with. Click the **Next: Configure Instance Details** button to proceed.

![Choose Instance type](/images/en/instance1.jpg)

### 2.1.2. Configure Instance details
Disable the auto-assignment of the public IP as you will assign a static one to your Instance. Click the **Next: Add Storage** button. 

![Configure Instance details](/images/en/instance2.jpg)

### 2.1.3. Add storage
Specify the size of the Drive - the 16GB is enough. 
Click **Next: Add Tags** button.

![Add storage](/images/en/instance3.jpg)

### 2.1.4. Add Tags
If you have several instances, you may group them by tags to enable better administration. Yet, this functionality is surplus. So we skip this by pressing the **Next: Configure Security Group** button.

![Add Tags](/images/en/instance4.jpg)

### 2.1.5. Opening ports
Configure the firewall by assigning open ports. The set of open ports is called the "Security Group". You need to create a new "Security Group", give it a name, a description and a UDP port (Custom UDP Rule).
In the Port Range field specify a port number from the range 49152 - 65535 of [dynamic ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers). In my case, I choose the 54321 port number. 
Click the **Review and Launch** button to complete this step.

![Opening ports](/images/en/instance5.jpg)

### 2.1.6. Review Instance Launch settings
Review and check all the settings for Instance Launch, and if all is OK click the **Launch** button.

![Review Instance Launch settings](/images/en/instance6.jpg)

### 2.1.7. Creating access keys
Create or add an existing SSH key in the dialog box that you will use for remote connection to your instance. 
Choose the "Create a new key pair" to generate a new key. Give it a name and click the **Download Key Pair** button to download the generated key to the PC drive. Click the **Launch Instances** button.

![Creating access keys](/images/en/instance7.jpg)

#### 2.1.7.1. Save private keys (.pem)
When you click the **Download Key Pair** you save the key as a  .pem file. 
For better management, I assigned a ***wireguard-awskey.pem*** name to the file.

![Save private keys](/images/en/instance8.jpg)

### 2.1.8. Instance Launch Summary
Next, you should see a message about the successful launch of the Instance that you have created. You can visit the list of your Instances by clicking the **View instances** button.

![Instance Launch Summary](/images/en/instance9.jpg)

## 2.2. Creating an external IP address

### 2.2.1. Create an External IP
Next is the creation of an external IP address, that you will use to connect to the VPN server. 
Find the **Elastic IPs** in the ***NETWORK & SECURITY*** category of the navigation panel. Click the **Allocate new address** button.

![Create an External IP](/images/en/elasticip1.jpg)

### 2.2.2. External IP setup
In the next step you need to enable the ***Amazon pool*** (which is by default), and click the **Allocate** button

![External IP setup](/images/en/elasticip2.jpg)

### 2.2.3. IP address overview
The next window displays an external IP address assigned by the Amazon pool. Write it down, as you will need it fo the configuration process and for VPN server setup. In this guide, as an example, I use the IP address ***4.3.2.1***.
Once you finish this step, click the **Close** button.

![IP address overview](/images/en/elasticip3.jpg)

### 2.2.4. List of external IP addresses
Next, you should get a list of your public IP addresses (Elastics IPs). 

![List of external IP addresses](/images/en/elasticip4.jpg)

### 2.2.5. Assign an external IP to Instance
Choose the IP address from the list (see 2.2.3), and click the mouse right button for a drop-down menu. 
In this menu choose the **Associate address** to assign an IP to the created Instance.

![Assign an external IP to Instance](/images/en/elasticip5.jpg)

### 2.2.6. Associate address with Instance
In the drop-down menu select the created Instance, and click the **Associate** button.

![Associate address with Instance](/images/en/elasticip6.jpg)

### 2.2.7. External IP assignment Summary
You should now have a created Instance with an assigned public IP address. This enables you to make a remote connection to the Instance from outside (from your PC) via SSH.

![External IP assignment Summary](/images/en/elasticip7.jpg)