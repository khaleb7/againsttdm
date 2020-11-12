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
    // Function to calculate TOT. This is invoked after the for loop to determine base stat value for a skill.
    const calcTot = (sBonus,rBonus,vBonus,kBonus,specBonus,iBonus) => {
      return Number(sBonus) + Number(rBonus) + Number(vBonus) + Number(kBonus) + Number(sBonus) + Number(iBonus);

    }
    // Loop through stats and update derived values.
    for (let [key, combatSkills] of Object.entries(data.combatSkills)) {
      //
      if(combatSkills.pStat === 'data.stats.brn.value') {
        combatSkills.stat = data.stats.brn.value;
      } else if (combatSkills.pStat === 'data.stats.swi.value') {
        combatSkills.stat = data.stats.swi.value;
      } else if (combatSkills.pStat === 'data.stats.for.value') {
        combatSkills.stat = data.stats.for.value;
      }else if (combatSkills.pStat === 'data.stats.wit.value') {
        combatSkills.stat = data.stats.wit.value;
      }else if (combatSkills.pStat === 'data.stats.wsd.value') {
        combatSkills.stat = data.stats.wsd.value;
      }else {
        combatSkills.stat = data.stats.bea.value;
      }
      combatSkills.value = calcTot(combatSkills.stat,combatSkills.rankBonus,combatSkills.voc,combatSkills.kin,combatSkills.spec,combatSkills.item);
      
    }
    for (let [key, armorSkills] of Object.entries(data.armorSkills)) {
      //
      if(armorSkills.pStat === 'data.stats.brn.value') {
        armorSkills.stat = data.stats.brn.value;
      } else if (armorSkills.pStat === 'data.stats.swi.value') {
        armorSkills.stat = data.stats.swi.value;
      } else if (armorSkills.pStat === 'data.stats.for.value') {
        armorSkills.stat = data.stats.for.value;
      }else if (armorSkills.pStat === 'data.stats.wit.value') {
        armorSkills.stat = data.stats.wit.value;
      }else if (armorSkills.pStat === 'data.stats.wsd.value') {
        armorSkills.stat = data.stats.wsd.value;
      }else  {
        armorSkills.stat = 0;
      }
      armorSkills.value = calcTot(armorSkills.stat,armorSkills.rankBonus,armorSkills.voc,armorSkills.kin,armorSkills.spec,armorSkills.item);

    }
    for (let [key, adventuringSkills] of Object.entries(data.adventuringSkills)) {
      //
      if(adventuringSkills.pStat === 'data.stats.brn.value') {
        adventuringSkills.stat = data.stats.brn.value;
      } else if (adventuringSkills.pStat === 'data.stats.swi.value') {
        adventuringSkills.stat = data.stats.swi.value;
      } else if (adventuringSkills.pStat === 'data.stats.for.value') {
        adventuringSkills.stat = data.stats.for.value;
      }else if (adventuringSkills.pStat === 'data.stats.wit.value') {
        adventuringSkills.stat = data.stats.wit.value;
      }else if (adventuringSkills.pStat === 'data.stats.wsd.value') {
        adventuringSkills.stat = data.stats.wsd.value;
      }else {
        adventuringSkills.stat = data.stats.bea.value;
      }
      adventuringSkills.value = calcTot(adventuringSkills.stat,adventuringSkills.rankBonus,adventuringSkills.voc,adventuringSkills.kin,adventuringSkills.spec,adventuringSkills.item);

    }
    for (let [key, roguerySkills] of Object.entries(data.roguerySkills)) {
      //
      if(roguerySkills.pStat === 'data.stats.brn.value') {
        roguerySkills.stat = data.stats.brn.value;
      } else if (roguerySkills.pStat === 'data.stats.swi.value') {
        roguerySkills.stat = data.stats.swi.value;
      } else if (roguerySkills.pStat === 'data.stats.for.value') {
        roguerySkills.stat = data.stats.for.value;
      }else if (roguerySkills.pStat === 'data.stats.wit.value') {
        roguerySkills.stat = data.stats.wit.value;
      }else if (roguerySkills.pStat === 'data.stats.wsd.value') {
        roguerySkills.stat = data.stats.wsd.value;
      }else  {
        roguerySkills.stat = data.stats.bea.value;
      }
      roguerySkills.value = calcTot(roguerySkills.stat,roguerySkills.rankBonus,roguerySkills.voc,roguerySkills.kin,roguerySkills.spec,roguerySkills.item);

    }
    for (let [key, loreSkills] of Object.entries(data.loreSkills)) {
      //
      if(loreSkills.pStat === 'data.stats.brn.value') {
        loreSkills.stat = data.stats.brn.value;
      } else if (loreSkills.pStat === 'data.stats.swi.value') {
        loreSkills.stat = data.stats.swi.value;
      } else if (loreSkills.pStat === 'data.stats.for.value') {
        loreSkills.stat = data.stats.for.value;
      }else if (loreSkills.pStat === 'data.stats.wit.value') {
        loreSkills.stat = data.stats.wit.value;
      }else if (loreSkills.pStat === 'data.stats.wsd.value') {
        loreSkills.stat = data.stats.wsd.value;
      }else {
        loreSkills.stat = data.stats.bea.value;
      }
      loreSkills.value = calcTot(loreSkills.stat,loreSkills.rankBonus,loreSkills.voc,loreSkills.kin,loreSkills.spec,loreSkills.item);

    }
    for (let [key, bodySkills] of Object.entries(data.bodySkills)) {
      //
      if(bodySkills.pStat === 'data.stats.brn.value') {
        bodySkills.stat = data.stats.brn.value;
      } else if (bodySkills.pStat === 'data.stats.swi.value') {
        bodySkills.stat = data.stats.swi.value;
      } else if (bodySkills.pStat === 'data.stats.for.value') {
        bodySkills.stat = data.stats.for.value;
      }else if (bodySkills.pStat === 'data.stats.wit.value') {
        bodySkills.stat = data.stats.wit.value;
      }else if (bodySkills.pStat === 'data.stats.wsd.value') {
        bodySkills.stat = data.stats.wsd.value;
      }else  {
        bodySkills.stat = data.stats.bea.value;
      }
      bodySkills.value = calcTot(bodySkills.stat,bodySkills.rankBonus,bodySkills.voc,bodySkills.kin,bodySkills.spec,bodySkills.item);

    }
  }

}