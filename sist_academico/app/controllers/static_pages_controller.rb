class StaticPagesController < ApplicationController
  before_filter :require_login, :only => :secret
  def home
  	@noticias = ApplicationController.obtener_noticias
  end

  def help
  end

  def about
  end

  def contact
  end
end
