// Import Modules
import { againstTdmActor } from "./actor/actor.js";
import { againstTdmActorSheet } from "./actor/actor-sheet.js";
import { againstTdmItem } from "./item/item.js";
import { againstTdmItemSheet } from "./item/item-sheet.js";
// import { againstNpcActor } from "./actor/actor.js";
import { againstTdmNpcSheet } from "./actor/npc-sheet.js";

Hooks.once('init', async function() {

  game.againsttdm = {
    againstTdmActor,
    againstTdmItem,
   // againstTdmNpc
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 0
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = againstTdmActor;
  // CONFIG.Actor.entityClass = againstTdmNpc;
  CONFIG.Item.entityClass = againstTdmItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("againsttdm", againstTdmActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("againsttdm", againstTdmItemSheet, { makeDefault: true });
  Actors.registerSheet("againsttdm",againstTdmNpcSheet, {makeDefault: false });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});