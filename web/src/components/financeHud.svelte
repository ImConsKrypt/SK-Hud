<script lang="ts">

    //TODO: Animate this ~ ConsKrypt

    import { fade } from 'svelte/transition';
    import { ReceiveEvent } from '@utils/eventsHandlers';
    let visible: boolean = true;
    let cash: number = 0;
    let bank: number = 0;
    let lastCash: number = 0;
    let lastBank: number = 0;
    let cashUpdateColour: string = "";
    let bankUpdateColour: string = "";
    let lastUpdateTime: number = 0;
    let time = new Date().getTime();
    ReceiveEvent('updateMoney', (data: {showing: boolean, cash: number, bank: number, keyPressed: boolean}): void =>{
        visible = data.showing;
        cash = data.cash;
        bank = data.bank;
        time = new Date().getTime();
        if (lastCash < cash) {
            cashUpdateColour = "color: yellowgreen; text-shadow: 0 0 2px yellowgreen;";
            lastCash = cash;
            visible = true;
            lastUpdateTime = (Number(new Date()) + 10000);
        } else if (lastCash > cash){
            cashUpdateColour = "color: rgb(227, 38, 54); text-shadow: 0 0 2px rgb(227, 38, 54);";
            lastCash = cash;
            lastUpdateTime = (Number(new Date()) + 10000);
            visible = true;
        }

        if (lastBank < bank) {
            bankUpdateColour = "color: yellowgreen; text-shadow: 0 0 2px yellowgreen;";
            lastBank = bank;
            lastUpdateTime = (Number(new Date()) + 10000);
            visible = true;
        } else if (lastBank > bank){
            bankUpdateColour = "color: rgb(227, 38, 54); text-shadow: 0 0 2px rgb(227, 38, 54);";
            lastBank = bank;
            lastUpdateTime = (Number(new Date()) + 10000);
            visible = true;
        }
    
        if (data.keyPressed) {
            lastUpdateTime = (Number(new Date()) + 10000);
            visible = true;
        }

        if (time > lastUpdateTime) {
            cashUpdateColour = "color: white; text-shadow: 0 0 2px white;";
            bankUpdateColour = "color: white; text-shadow: 0 0 2px white;";
            visible = false;
        }
    })

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
</script>
{#if (visible)} 
    <div class="rightDiv" transition:fade={{duration:100}}>
        <div class="financeWrapper">
            <p><i class="fa-light fa-wallet"></i> <span style="{cashUpdateColour};">${numberWithCommas(cash)}</span></p>
            <p><i class="fa-light fa-credit-card"></i> <span style="{bankUpdateColour};">${numberWithCommas(bank)}</span></p>
        </div>
    </div>
{/if}

<style>
    .rightDiv {
        position:absolute;
        top: 3vh;
        right: 5vh;
        font-size: 2vh;
        color: white;
        text-shadow: 0 0 2px white;
        text-align: right;
    }
    .financeWrapper {
        background-color: rgba(25, 25, 25, 0.6);
        padding: 15px;
        border-radius: 5px;
    }
</style>