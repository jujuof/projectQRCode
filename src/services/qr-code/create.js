import prompt from "prompt"
import promptQRCode from "../../prompts-schema/prompt-qrcode.js"
import handle from "../qr-code/handle.js"

async function createQRCode(){
    prompt.get(promptQRCode, handle)
}

export default createQRCode