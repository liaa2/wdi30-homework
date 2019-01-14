class GamesController < ApplicationController
  # Magic 8 Ball
  def magic_8_ball
    render :magic_8_ball
  end

  def magic_8_ball_fortune
    answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    @fortune = answers.sample

    render :magic_8_ball_fortune
  end

  # Secret Number
  def secret_number
    render :secret_number
  end

  def secret_number_result
    @secret_number = (1..10).to_a.sample

    if @secret_number == params["number"].to_i
      render :secret_number_correct
    else
      render :secret_number_incorrect
    end
  end

  # Rock Paper Scissors
  def rock_paper_scissors_play
    render :rock_paper_scissors_play
  end

  def rock_paper_scissors_result
    user_throw = params[:throw]
    throws = ["rock", "paper", "scissors"]
    computer_throw = throws.sample
    user_wins = false

    if user_throw == computer_throw
      render :rock_paper_scissors_win
    else
      render :rock_paper_scissors_lose
    end
  end
end
