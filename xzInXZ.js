import * as MC from "@minecraft/server";

/**
 * startPosからendPosまでの間にposが入っているかを確認します。
 * 
 * @param { MC.Vector3 } pos 
 * @param { MC.Vector3 } startPos 
 * @param { MC.Vector3 } endPos 
 * @param { boolean } checkY Y軸もチェックするかどうか
 */
export function xzInXZ(pos, startPos, endPos, checkY = true) {
    startPos.x = Math.min(startPos.x, endPos.x);
    startPos.y = Math.min(startPos.y, endPos.y);
    startPos.z = Math.min(startPos.z, endPos.z);

    endPos.x = Math.max(startPos.x, endPos.x);
    endPos.y = Math.max(startPos.y, endPos.y);
    endPos.z = Math.max(startPos.z, endPos.z);

    const xInPos = pos.x >= startPos.x && pos.x <= endPos.x;
    const yInPos = !checkY || (pos.y >= startPos.y && pos.y <= endPos.y);
    const zInPos = pos.z >= startPos.z && pos.z <= endPos.z;

    return xInPos && yInPos && zInPos;
}
