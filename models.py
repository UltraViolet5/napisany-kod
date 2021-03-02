from flask_login import UserMixin
import main


class User(main.db.Model, UserMixin):
    id = main.db.Column(main.db.Integer, primary_key=True)
    username = main.db.Column(main.db.String(30), unique=True, nullable=False)
    email = main.db.Column(main.db.String(120), unique=True, nullable=False)
    password = main.db.Column(main.db.String(60), nullable=False)


class Boards(main.db.Model):
    id = main.db.Column(main.db.Integer, primary_key=True)
    title = main.db.Column(main.db.String(120), nullable=False)
    owner_id = main.db.Column(main.db.Integer, main.db.ForeignKey('user.id'), nullable=False)

    owner = main.db.relationship('User', foreign_keys=[owner_id])


class Statuses(main.db.Model):
    id = main.db.Column(main.db.Integer, primary_key=True)
    title = main.db.Column(main.db.String(120), unique=True, nullable=False)


class Cards(main.db.Model):
    id = main.db.Column(main.db.Integer, primary_key=True)
    board_id = main.db.Column(main.db.Integer, main.db.ForeignKey('boards.id'), nullable=False)
    title = main.db.Column(main.db.String(120), nullable=False)
    status_id = main.db.Column(main.db.Integer, main.db.ForeignKey('statuses.id'), nullable=False)
    order = main.db.Column(main.db.Integer, nullable=False)

    board = main.db.relationship('Boards', foreign_keys=[board_id])
    status = main.db.relationship('Statuses', foreign_keys=[status_id])


main.db.create_all()

resp = make_resposne(render_tmp)
resp.set_cookie()