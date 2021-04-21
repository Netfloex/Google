export type Request = [
	string, //
	string[],
	string[],
	[],
	Info
];
type Info = {
	"google:clientdata": {
		bpc: boolean;
		tlw: boolean;
	};
	"google:suggestrelevance": number[];
	"google:suggestsubtypes": Array<number[]>;
	"google:suggesttype": string[];
	"google:verbatimrelevance": number;
};
