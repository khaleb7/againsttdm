/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class againstTdmActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;
    data.stats
    // Make modifications to data here. For example:

    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, combatSkills] of Object.entries(data.combatSkills)) {
      //
      if(combatSkills.pStat === 'data.stats.brn.value') {
        combatSkills.stat = data.stats.brn.value;
        console.log(key,combatSkills.stat);
      } else if (combatSkills.pStat === 'data.stats.swi.value') {
        combatSkills.stat = data.stats.swi.value;
        console.log(key,combatSkills.stat);
      } else combatSkills.stat = 9;
      console.log(key,combatSkills.stat);
    }



  }

}