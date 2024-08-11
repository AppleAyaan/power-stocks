# used from CHAT GPT in order to check SQL integration (first time using it)

from sqlalchemy.orm import Session
from app.database import engine, SessionLocal
from app.models import Base, User

def test_db():
    # Create all tables
    Base.metadata.create_all(bind=engine)
    
    # Test creating a new user
    db = SessionLocal()
    new_user = User(username="testuser", password_hash="testpassword")
    db.add(new_user)
    db.commit()
    
    # Query the database
    user = db.query(User).filter(User.username == "testuser").first()
    
    if user:
        print(f"User found: {user.username}")
    else:
        print("User not found")

    db.close()

if __name__ == "__main__":
    test_db()
