# Free Wireguard VPN service on AWS

## The reasoning

The increase of Internet censorship by authoritarian regimes expands the blockage of useful internet resources making impossible the use of the WEB and in essence violates the fundamental right to freedom of opinion and expression enshrined in the [Universal Declaration of Human Rights](https://www.un.org/ru/documents/decl_conv/declarations/declhr.shtml).

::: tip Article 19
Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.
:::

The following is the detailed 6 steps instruction for non-IT people to deploy free* [VPN service](https://ru.bmstu.wiki/VPN_(Virtual_Private_Network)) upon [Wireguard](https://www.wireguard.com/) technology in [Amazon Web Services (AWS) cloud infrastructure](https://aws.amazon.com/ru/), using a 12 months free account, on an Instance (virtual machine) run by Ubuntu Server 18.04 LTS. 

I tried to make this walkthrough as friendly as possible to people far from IT. The only thing required is assiduity in repeating the steps described below.

::: tip Note
* AWS offers [free usage tier](https://aws.amazon.com/ru/free/faqs/) for a period of 12 months limited to 15 GB of traffic monthly.
:::

## Stages
1. [Register the AWS Account.](aws-account-registration)
2. [Create an AWS instance.](create-aws-instance)
3. [Connect to AWS instance.](connection-to-instance)
4. [Configure Wireguard server.](configure-wireguard)
5. [Configure VPN Clients.](configure-vpn-clients)
6. [Verify VPN connection.](check-the-installation-of-vpn)

## Useful links
* [Scripts for Wireguard automated installation on AWS.](https://github.com/isystem-io/wireguard-aws)
* [Discussion on Habr.com (RU)](https://habr.com/ru/post/448528/#comments)
* [Discussion on Habr.com (EN)](https://habr.com/en/post/449234/#comments)

## The authors
* [Alexey Chernyavskiy](https://github.com/alexey-chernyavskiy)
* [Assuan Saimov](https://t.me/saimov) (english translation)