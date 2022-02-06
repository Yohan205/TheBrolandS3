{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\MK2\\BLACK\\check_up_mk1.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "369584c4_0372_4c50_8d91_7abe6076d116",
	"file_version": 203,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'checkUpBlackMK2'\n\tonApply() {\n\n\t\tlet h = 16;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\t\tlet block = \"se:black_elevator_mk2\";\n\t\tlet v = \"MK2\";\n\n\t\tfor (let i = 3; i <= h; i++) {\n\t\t\tlet j = i + 1;\n\t\t\tlet checkUp = \"execute @s ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ detect ~~\" + i + \"~ \" + block + \" 0 scoreboard players add @s[scores={elevator=0}] elevator \" + j;\n\t\t\tsetupCommands[0 + (count * 2)] = checkUp;\n\t\t\tcount++;\n\t\t}\n\n\t\tlet tpUp = \"execute @s[scores={elevator=!0}] ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ function \"+v+\"/tpUp\"+v+\"\";\n\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}