// import styles from './Notification.page.module.scss';
import Page from '@shared/ui/page/Page';
import { Notification } from '@widgets/notification';

export default function NotificationPage() {
	return (
		<Page title="Уведомления">
			<Notification isPage array={Array(6).fill('')} />
		</Page>
	);
}
