$(document).ready(() => {

    let $checkingAccount = 0;
    let $savingsAccount = 0;


    // checking - deposit ///////////////////////////////////////////////////
    $('#checking-deposit').on('click', () => {
        const $cDeposit = $('#checking-amount').val();
        if ($cDeposit > 0) {
            $checkingAccount += Number($cDeposit);
            $('div #checking').removeClass('zero');
            $('#checking-balance').html(`$${$checkingAccount}`);
        }
    });

    // checking - withdraw
    $('#checking-withdraw').on('click', () => {
        const $cWithdraw = $('#checking-amount').val();
        if ($cWithdraw <= $checkingAccount) {
            $checkingAccount -= Number($cWithdraw);
            $('#checking-balance').html(`$${$checkingAccount}`);
        }
        if ($checkingAccount === 0) {
            $('div #checking').addClass('zero');
        }
    });

    // savings - deposit ///////////////////////////////////////////////////////
    $('#savings-deposit').on('click', () => {
        const $sDeposit = $('#savings-amount').val();
        if ($sDeposit > 0) {
            $savingsAccount += Number($sDeposit);
            $('div #savings').removeClass('zero');
            $('#savings-balance').html(`$${$savingsAccount}`);
        }
    });

    // savings - withdraw
    $('#savings-withdraw').on('click', () => {
        const $sWithdraw = $('#savings-amount').val();
        if ($sWithdraw <= $savingsAccount) {
            $savingsAccount -= Number($sWithdraw);
            $('#savings-balance').html(`$${$savingsAccount}`);
        }
        if ($savingsAccount === 0) {
            $('div #savings').addClass('zero');
        }
    });


    
});



