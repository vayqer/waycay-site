export enum By {
	user,
	assistant,
}
export interface Input {
	text: string;
	by: By;
}
