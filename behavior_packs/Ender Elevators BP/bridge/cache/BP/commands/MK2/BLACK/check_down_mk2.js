{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\MK2\\BLACK\\check_down_mk1.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "e07095aa_7ec4_458f_9c53_564935baa8c8",
	"file_version": 101,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'checkDownBlackMK2'\n\tonApply() {\n\n\t\tlet h = 16;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\t\tlet block = \"se:black_elevator_mk2\";\n\t\tlet v = \"MK2\";\n\n\t\tfor (let i = 4; i <= h; i++) {\n\t\t\tlet j = i - 1;\n\t\t\tlet checkUp = \"execute @s ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ detect ~~-\" + i + \"~ \" + block + \"  0 scoreboard players add @s[scores={elevator=0}] elevator \" + j;\n\t\t\tsetupCommands[0 + (count * 2)] = checkUp;\n\t\t\tcount++;\n\t\t}\n\n\t\tlet tpUp = \"execute @s[scores={elevator=!0}] ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ function \"+v+\"/tpDown\"+v+\"\";\n\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}