export class AllKeysAndModes {
    public IonianMajor: MajorKeys;
    public Dorian: MinorKeys;
    public Phrygian: MinorKeys;
    public Lydian: MajorKeys;
    public Mixolydian: MajorKeys;
    public AeolianMinor: MinorKeys;
    public Locrian: MajorKeys;

    constructor() {
        this.IonianMajor = { 
            C: true,
            G: true,
            D: true,
            A: true,
            E: true,
            B: true,
            FsGb: true,
            Db: true,
            Ab: true,
            Eb: true,
            Bb: true,
            F: true,
        }
        this.Dorian = {
            A: false,
            E: false,
            B: false,
            Fs: false,
            Cs: false,
            Gs: false,
            DsEb: false,
            Bb: false,
            F: false,
            C: false,
            G: false,
            D: false,
        }
        this.Phrygian = {
            A: false,
            E: false,
            B: false,
            Fs: false,
            Cs: false,
            Gs: false,
            DsEb: false,
            Bb: false,
            F: false,
            C: false,
            G: false,
            D: false,
        }
        this.Lydian = { 
            C: false,
            G: false,
            D: false,
            A: false,
            E: false,
            B: false,
            FsGb: false,
            Db: false,
            Ab: false,
            Eb: false,
            Bb: false,
            F: false,
        }
        this.Mixolydian = { 
            C: false,
            G: false,
            D: false,
            A: false,
            E: false,
            B: false,
            FsGb: false,
            Db: false,
            Ab: false,
            Eb: false,
            Bb: false,
            F: false,
        }
        this.AeolianMinor = {
            A: true,
            E: true,
            B: true,
            Fs: true,
            Cs: true,
            Gs: true,
            DsEb: true,
            Bb: true,
            F: true,
            C: true,
            G: true,
            D: true,
        }
        this.Locrian = { 
            C: false,
            G: false,
            D: false,
            A: false,
            E: false,
            B: false,
            FsGb: false,
            Db: false,
            Ab: false,
            Eb: false,
            Bb: false,
            F: false,
        }
    }
}

export class MajorKeys {
    public C: boolean;
    public G: boolean;
    public D: boolean;
    public A: boolean;
    public E: boolean;
    public B: boolean;
    public FsGb: boolean;
    public Db: boolean;
    public Ab: boolean;
    public Eb: boolean;
    public Bb: boolean;
    public F: boolean;
}

export class MinorKeys {
    public A: boolean;
    public E: boolean;
    public B: boolean;
    public Fs: boolean;
    public Cs: boolean;
    public Gs: boolean;
    public DsEb: boolean;
    public Bb: boolean;
    public F: boolean;
    public C: boolean;
    public G: boolean;
    public D: boolean;
}