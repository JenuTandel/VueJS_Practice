Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (value <= 0) {
        this.winner = "Monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "Draw";
      } else if (value <= 0) {
        this.winner = "Player";
      }
    },
  },
  computed: {
    playerBarstyles() {
      if (this.playerHealth < 0) {
        return {
          width: "0%",
        };
      }
      return {
        width: this.playerHealth + "%",
      };
    },
    monsterBarstyles() {
      if (this.monsterHealth < 0) {
        return {
          width: "0%",
        };
      }
      return {
        width: this.monsterHealth + "%",
      };
    },
    EnableSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    attackOnMoster() {
      this.currentRound++;
      const attackValue = this.getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.addLogMessage("Player", "attack", attackValue);
      this.attackOnPlayer();
    },
    attackOnPlayer() {
      const attackValue = this.getRandomValue(8, 15);
      this.playerHealth = this.playerHealth - attackValue;
      this.addLogMessage("Monster", "attack", attackValue);
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = this.getRandomValue(10, 25);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.addLogMessage("Player", "special-attack", attackValue);
      this.attackOnPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = this.getRandomValue(8, 20);
      if (healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + healValue;
      }
      this.addLogMessage("Player", "heal", healValue);
      this.attackOnPlayer();
    },
    surrender() {
      this.winner = "Monster";
    },
    startAgain() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");
