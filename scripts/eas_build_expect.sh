#
# Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
#
# You may not use, distribute or modify this code without the explicitly
# permission of the author.
#

#!/usr/bin/expect -f

set timeout -1
set profile [lindex $argv 0]
set platform [lindex $argv 1]
set fileExt [lindex $argv 2]

set current_time [exec date "+%Y_%m_%d_%H_%M_%S"]

spawn eas build -p $platform --local --profile $profile --output "./artifacts/$profile/$platform/Vokse_$current_time.$fileExt"

expect {
    "Do you want to log in to your Apple account?" { send "\r"; exp_continue }
    "Log in to your Apple Developer account to continue" { send "\r"; exp_continue }
	"Reuse this distribution certificate?" { send "\r"; exp_continue }
    "Would you like to reuse the profile?" { send "\r"; exp_continue }
	"Generate a new Apple Provisioning Profile?" { send "\r"; exp_continue }
    eof
}

expect "Build successful"
eof
