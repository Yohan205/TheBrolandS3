{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\MK4\\check_down_mk4.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "dcccb4b9_4deb_4c3d_a2d4_dd8ffa0a5593",
	"file_version": 109,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'checkDownMK4'\n\tonApply(b) {\n\n\t\tlet h = 129;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\t\tlet block = b;\n\t\tlet v = \"MK4\";\n\n\t\tfor (let i = 4; i <= h; i++) {\n\t\t\tlet j = i - 1;\n\t\t\tlet checkUp = \"execute @s ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ detect ~~-\" + i + \"~ \" + block + \"  0 scoreboard players add @s[scores={y=0}] y \" + j;\n\t\t\tsetupCommands[0 + (count * 2)] = checkUp;\n\t\t\tcount++;\n\t\t}\n\n\t\tlet tpUp = \"execute @s[scores={y=!0}] ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ function \"+v+\"/tpDown\"+v+\"\";\n\t\tsetupCommands[1 + (count * 2)] = tpUp;\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}