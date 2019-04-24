# 3. Connect to AWS instance
[SSH](https://en.wikipedia.org/wiki/Secure_Shell) is a secure protocol to manage remote computer devices.

## 3.1. Connect from a Windows PC via SSH
Download and install a [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) to make a connection from the Windows PC.
 
### 3.1.1. Import Private Key for Putty

#### 3.1.1.1. Import AWS key into Putty
Launch a PuTTYgen utility to match your AWS key in .pem format with a .ppk format suitable for the Putty. 
To do this select **Conversions -> Import Key** from the top menu.

![Import AWS key into Putty](/images/en/ssh1.jpg)

#### 3.1.1.2. AWS key in PEM format
Next, choose the key that you dealt with in [2.1.7.1](create-aws-instance.html#_2-1-7-1-save-private-keys-pem) 
In my case it is ***wireguard-awskey.pem***.

![AWS key in PEM format](/images/en/ssh2.jpg)

#### 3.1.1.3. Set the Key import parameters
At this step, you need to specify the import parameters of the Key - the ***key comment*** and the ***key passphrase***. You will need these at every connection. Also it protects the key itself with a password from unauthorized access.  
You may skip the password assignment. But this will make your connection less secure in case the key falls into the wrong hands. 
Once you finish, click the **Save private key** button.
 
![Set the Key import parameters](/images/en/ssh3.jpg)

#### 3.1.1.4. Save the imported .ppk key
You can save your private key in a `.ppk` format suitable for ***Putty*** from the save file dialog box. 
Specify the key name (in my case, `wireguard-awskey.ppk`) and click the **Save** button.
 
![Save the imported .ppk key](/images/en/ssh4.jpg)

### 3.1.2. Create and configure a connection in Putty
 
#### 3.1.2.1. Make a connection
Run the Putty program, choose the **Session** category (it is open by default) and in the **Host Name** field enter the public IP address of the server. I remind that you got your public IP address in step [2.2.3](create-aws-instance.html#_2-2-3-ip-address-overview).
Give any name to the connection in the **Saved Session** field  (for me it is `wireguard-aws-london`). Click the **Save** button.
 
![Make a connection](/images/en/ssh5.jpg)

#### 3.1.2.2. Set a user auto-login
Choose the ***Data*** subcategory from the ***Connection*** category. Enter the Auto-login username **ubuntu** in the **Auto-login username** field. (***ubuntu*** is the standard instance user on AWS with Ubuntu).
 
![Set a user auto-login](/images/en/ssh6.jpg)

#### 3.1.2.3. Use a private key for an SSH connection
Follow the path ***Connection -> SSH -> Auth*** subcategory and click on the **Browse** button to choose the private key file.

![Use a private key for an SSH connection](/images/en/ssh7.jpg)

#### 3.1.2.4. Open the private key file
Specify the key that you imported earlier in step [3.1.1.4](#_3-1-1-4-save-the-imported-ppk-key) - `wireguard-awskey.ppk`, and click the **Open** button.

![Open the private key file](/images/en/ssh8.jpg)

#### 3.1.2.5. Save changes and launch an SSH remote connection
In the ***Session*** category of Putty configuration window press the **Save** button to apply all the changes you made in ([3.1.2.2](#_3-1-2-2-set-a-user-auto-login) - [3.1.2.4](#_3-1-2-4-open-the-private-key-file)). 
Click the **Open** button to launch the ready-to-go SSH remote connection.

![Save changes and launch an SSH remote connection](/images/en/ssh10.jpg)

#### 3.1.2.7. Set a trust between hosts
At the first connection, you should get a warning about the lack of trust between two computers (hosts). The system asks you whether you trust the remote host. Click **Yes** to add the remote host to the trust list.

![Set a trust between hosts](/images/en/ssh11.jpg)

#### 3.1.2.8. Enter the password to activate the key
In a Putty terminal window enter the key password you set in step
[3.1.1.3](#_3-1-1-3-set-the-key-import-parameters). When entering the password it does not show any action on the screen. No worries, if you make a mistake, you can use the backspace key.

![Enter the password to activate the key](/images/en/ssh12.jpg)

#### 3.1.2.9. Successful connection
Once you enter the correct password, you should get a welcome text. It informs you that the remote system is ready to execute your commands.

![Successful connection](/images/en/ssh13.jpg)