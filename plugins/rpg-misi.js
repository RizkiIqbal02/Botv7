let handler = async (m, { conn }) => {
let info = `
*${htki} MISI ${htka}*

Â©2022 FangzBot Official 
`
const sections = [
   {
	title: `â MISI`,
	rows: [
	    {title: "ð Taxy", rowId: '.grab', description: 'Rpg Taxy' },
	    {title: "â ï¸ Membunuh", rowId: '.bunuh', description: 'Rpg Membunuh' },
	{title: "ðµ Ojek", rowId: '.ojek', description: 'Rpg Ojek' },
	{title: "ð¥µ Open Bo", rowId: '.ngewe', description: 'Rpg Open Bo' },
	{title: "ð¤  Koboy", rowId: '.koboy', description: 'Rpg Koboy' },
	{title: "ð® Polisi", rowId: '.polisi', description: 'Rpg Polisi' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "ð¸MISI",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ð Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['misi', 'misirpg']
handler.tags = ['info']
handler.command = /^(misi(rpg)?|misirpg)$/i
handler.private = false

export default handler
