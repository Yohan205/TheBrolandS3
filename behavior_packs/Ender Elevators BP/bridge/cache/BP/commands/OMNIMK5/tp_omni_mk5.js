{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\OMNIMK4\\tp_omni_mk5.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "986f1df9_c6c1_410d_98fb_fd3d646fb366",
	"file_version": 110,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'teleOmniMK5'\n\tonApply() {\n\n\t\tlet h = 256;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\n\t\tfor (let i = 3; i <= h; i++) {\n\t\t\tlet tp = \"execute @s[scores={x=\"+i+\"}] ~~~ tp @s ~\" + i + \"~~ true\";\n\t\t\tsetupCommands[0 + (count * 12)] = tp;\n\t\t\tlet clean = \"execute @s[scores={x=\"+i+\"}] ~~~ scoreboard players set @s x 0\"\n\t\t\tsetupCommands[1 + (count * 12)] = clean;\n\t\t\ttp = \"execute @s[scores={x=-\"+i+\"}] ~~~ tp @s ~-\" + i + \"~~ true\";\n\t\t\tsetupCommands[2 + (count * 12)] = tp;\n\t\t\tclean = \"execute @s[scores={x=-\"+i+\"}] ~~~ scoreboard players set @s x 0\"\n\t\t\tsetupCommands[3 + (count * 12)] = clean;\n\t\t\ttp = \"execute @s[scores={y=\"+i+\"}] ~~~ tp @s ~~\" + i + \"~ true\";\n\t\t\tsetupCommands[4 + (count * 12)] = tp;\n\t\t\tclean = \"execute @s[scores={y=\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[5 + (count * 12)] = clean;\n\t\t\ttp = \"execute @s[scores={y=-\"+i+\"}] ~~~ tp @s ~~-\" + i + \"~ true\";\n\t\t\tsetupCommands[6 + (count * 12)] = tp;\n\t\t\tclean = \"execute @s[scores={y=-\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[7 + (count * 12)] = clean;\n\t\t\ttp = \"execute @s[scores={z=\"+i+\"}] ~~~ tp @s ~~~\" + i + \" true\";\n\t\t\tsetupCommands[8 + (count * 12)] = tp;\n\t\t\tclean = \"execute @s[scores={z=\"+i+\"}] ~~~ scoreboard players set @s z 0\"\n\t\t\tsetupCommands[9 + (count * 12)] = clean;\n\t\t\ttp = \"execute @s[scores={z=-\"+i+\"}] ~~~ tp @s ~~~-\" + i + \" true\";\n\t\t\tsetupCommands[10 + (count * 12)] = tp;\n\t\t\tclean = \"execute @s[scores={z=-\"+i+\"}] ~~~ scoreboard players set @s z 0\"\n\t\t\tsetupCommands[11 + (count * 12)] = clean;\n\t\t\tcount++;\n\t\t}\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() {}\n})"
}