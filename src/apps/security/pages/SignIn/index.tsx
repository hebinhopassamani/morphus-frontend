import type { MorphusProps } from '@core/util/types/Morphus.types';
import styles from './Styles.module.css';
import { MpsCard, MpsCardContent, MpsCardFooter, MpsCardHeader } from '@components/Card';

export type SignInPageProps = {} & MorphusProps;

export function SignInPage() {
    return (
        <div className={styles.signin}>
            <MpsCard>
                <MpsCardHeader title='Teste de Card' icon='signout'></MpsCardHeader>
                <MpsCardContent></MpsCardContent>
                <MpsCardFooter></MpsCardFooter>
            </MpsCard>
        </div>
    );
}
