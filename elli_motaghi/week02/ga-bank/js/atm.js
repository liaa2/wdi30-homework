$(document).ready(() => {

    let $checkingAccount = 0;
    let $savingsAccount = 0;

    // checking - deposit
    $('#checking-deposit').on('click', () => {

        const $deposit = $('#checking-amount').val();
        $checkingAccount += Number($deposit);
        $('#checking-balance').html(`$${$checkingAccount}`);
    });


    // checking - withdraw
    $('#checking-withdraw').on('click', () => {

        const $withdraw = $('#checking-amount').val();
        $checkingAccount -= Number($withdraw);
        $('#checking-balance').html(`$${$checkingAccount}`);
    });

})



