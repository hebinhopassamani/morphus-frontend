import type { MorphusProps } from '@core/util/types/Morphus.types';
import styles from './Styles.module.css';
import { MpsCardTheme } from '@components/Card';

export type SignInPageProps = {} & MorphusProps;

export function SignInPage() {
    return (
        <div className={styles.signin}>
            <MpsCardTheme title='Teste de Card' color='primary'></MpsCardTheme>
        </div>
    );
}
