import Link from 'next/link';

import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import Email from '@/components/Inputs/Email/Email';
import Password from '@/components/Inputs/Password/Password';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <h2 className={styles.title}>Logowanie</h2>
        <form className={styles.form}>
          <Email />
          <Password />
        </form>
        <div className={styles.button}>
          <Button>
            <Link href="/home">Zaloguj się</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
