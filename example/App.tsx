import { getStandbyBucket } from "expo-standby-bucket";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
	const info = getStandbyBucket();

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.container}>
				<Text style={styles.header}>App Standby Bucket</Text>
				<Group name="Raw bucket">
					<Text>{`${info.bucket}`}</Text>
				</Group>
				<Group name="Bucket name">
					<Text>{info.bucketName}</Text>
				</Group>
				<Group name="Supported">
					<Text>{info.supported ? "true" : "false"}</Text>
				</Group>
			</ScrollView>
		</SafeAreaView>
	);
}

function Group({
	name,
	children,
}: {
	name: string;
	children: React.ReactNode;
}) {
	return (
		<View style={styles.group}>
			<Text style={styles.groupHeader}>{name}</Text>
			{children}
		</View>
	);
}

const styles = {
	header: {
		fontSize: 30,
		margin: 20,
	},
	groupHeader: {
		fontSize: 20,
		marginBottom: 20,
	},
	group: {
		margin: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
	},
	container: {
		flex: 1,
		backgroundColor: "#eee",
	},
	view: {
		flex: 1,
		height: 200,
	},
};
