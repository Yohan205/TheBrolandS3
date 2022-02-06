{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\OMEGA\\check_down_omega.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "c9d800f1_bf8c_40b0_921c_90cfafc25642",
	"file_version": 113,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'checkDownOmega'\n\tonApply(b) {\n\n\t\tlet h = 257;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\t\tlet block = b;\n\t\tlet v = \"OMEGA\";\n\n\t\tfor (let i = 4; i <= h; i++) {\n\t\t\tlet j = i - 1;\n\t\t\tlet checkUp = \"execute @s ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ detect ~~-\" + i + \"~ \" + block + \"  0 scoreboard players add @s[scores={y=0}] y \" + j;\n\t\t\tsetupCommands[0 + (count * 2)] = checkUp;\n\t\t\tcount++;\n\t\t}\n\n\t\tlet tpUp = \"execute @s[scores={y=!0}] ~~~ detect ~~-1~ \" + block + \" 0 execute @s ~~~ function \"+v+\"/tpDown\"+v+\"\";\n\t\tsetupCommands[1 + (count * 2)] = tpUp;\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}