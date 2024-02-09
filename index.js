class hero {
    constructor(heroName, heroAge, heroType){
        this.name = heroName
        this.age = heroAge
        this.type = heroType
    }
    toAttack(){
        let attack
        switch (this.type) {
            case "mago":
                attack = "magia"
                break
            case "guerreiro":
                attack = "espada"
                break
            case "monge":
                attack = "artes marciais"
                break
            case "ninja":
                attack = "shuriken"
                break
        }
        console.log (`O ${this.type} chamado ${this.name} atacou usando ${attack}`)
    }
}

// Heróis
let hero1 = new hero("Phill Dunphy", "54", "mago")
let hero2 = new hero("Goku", "40", "guerreiro")
let hero3 = new hero("Aang", "112", "monge")
let hero4 = new hero("Batman", "85", "ninja")

// Chamando ataques
hero1.toAttack()
hero2.toAttack()
hero3.toAttack()
hero4.toAttack()