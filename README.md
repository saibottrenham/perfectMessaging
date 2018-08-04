# perfectMessaging
The purpose of this repo is to spin up a quick to set up Messaging script for custom webdevelopment

### preReq

Install mail on ubuntu

	sudo apt-get install php-pear
	sudo pear install mail

	sudo pear install Net_SMTP

	sudo pear install Auth_SASL

	sudo pear install mail_mime

Install php7.x

	sudo apt-get update && apt-get upgrade
	sudo apt-get install php

verify that you have the right version

	php -v

Edit donate.php to put in your Email Settings for SMTP

Make sure you have SMTP enabled in your Gmail Settings

check this link for more Info
https://www.arclab.com/en/kb/email/how-to-enable-imap-pop3-smtp-gmail-account.html
