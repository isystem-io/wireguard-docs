# 5. Configure VPN Clients

## 5.1. Android mobile Client setup 
Download the Wireguard mobile client for Android from the [official GooglePlay store](https://play.google.com/store/apps/details?id=com.wireguard.android).

Scan the QR code to import the client configuration (see [4.2.2](#_4-2-2-client-configuration-with-qr-code)) and assign it a name.

![Android mobile Client setup](/images/en/android1.jpg)

After importing the configuration, you can enable the VPN tunnel. A little key symbol in the Android system confirms the VPN connection. 

![Successfully established Wireguard connection on Android](/images/en/android2.jpg)

## 5.2. Windows Client Setup
Download and install the [TunSafe](https://tunsafe.com/download), which is a Wireguard client for Windows.

## 5.2.1. Create a local text file to import configuration
Create a dummy text file on the desktop of your PC.

![Creating a text file](/images/en/windows1.jpg)

### 5.2.2. Copy the configuration file from the server
Copy the contents of the configuration file from the server. 
Then, go back to the Putty terminal and display the contents of the user configuration file (see [4.2.1](#_4-2-1-user-configuration-file)). 
Use right-click of the mouse to copy the configuration text in the Putty terminal.

![Copying text with configuration](/images/en/windows2.jpg)

### 5.2.3. Paste the configuration text to a local text file
Paste the configuration text from the clipboard to dummy text file we created earlier on the desktop (see [5.2.1](#_5-2-1-create-a-local-text-file-to-import-configuration)).

![Paste text with configuration](/images/en/windows3.jpg)

### 5.2.4. Save the local configuration file
Save the text file as the **.conf** format (in my case as `london.conf`)

![Save the local configuration file](/images/en/windows4.jpg)

### 5.2.5. Import local configuration file
Import the configuration file into the TunSafe program.

![Import local configuration file into TunSafe](/images/en/windows5.jpg)

### 5.2.6. Establish a VPN connection
In TunSafe program select the imported configuration file and click the **Connect** button.

![Establish a VPN connection](/images/en/windows6.jpg)